# `dataOciOpensearchOpensearchClusters` Submodule <a name="`dataOciOpensearchOpensearchClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchClusters <a name="DataOciOpensearchOpensearchClusters" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters oci_opensearch_opensearch_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClusters;

DataOciOpensearchOpensearchClusters.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOpensearchOpensearchClustersFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#filter DataOciOpensearchOpensearchClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOpensearchOpensearchClustersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClusters;

DataOciOpensearchOpensearchClusters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClusters;

DataOciOpensearchOpensearchClusters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClusters;

DataOciOpensearchOpensearchClusters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClusters;

DataOciOpensearchOpensearchClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOpensearchOpensearchClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOpensearchOpensearchClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOpensearchOpensearchClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList">DataOciOpensearchOpensearchClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.opensearchClusterCollection">opensearchClusterCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filter"></a>

```java
public DataOciOpensearchOpensearchClustersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList">DataOciOpensearchOpensearchClustersFilterList</a>

---

##### `opensearchClusterCollection`<sup>Required</sup> <a name="opensearchClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.opensearchClusterCollection"></a>

```java
public DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList getOpensearchClusterCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClusters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchClustersConfig <a name="DataOciOpensearchOpensearchClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersConfig;

DataOciOpensearchOpensearchClustersConfig.builder()
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOpensearchOpensearchClustersFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#compartment_id DataOciOpensearchOpensearchClusters#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#display_name DataOciOpensearchOpensearchClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#filter DataOciOpensearchOpensearchClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#id DataOciOpensearchOpensearchClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#state DataOciOpensearchOpensearchClusters#state}.

---

### DataOciOpensearchOpensearchClustersFilter <a name="DataOciOpensearchOpensearchClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersFilter;

DataOciOpensearchOpensearchClustersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#name DataOciOpensearchOpensearchClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#values DataOciOpensearchOpensearchClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#regex DataOciOpensearchOpensearchClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#name DataOciOpensearchOpensearchClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#values DataOciOpensearchOpensearchClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_clusters#regex DataOciOpensearchOpensearchClusters#regex}.

---

### DataOciOpensearchOpensearchClustersOpensearchClusterCollection <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection;

DataOciOpensearchOpensearchClustersOpensearchClusterCollection.builder()
    .build();
```


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems;

DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOpensearchOpensearchClustersFilterList <a name="DataOciOpensearchOpensearchClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersFilterList;

new DataOciOpensearchOpensearchClustersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get"></a>

```java
public DataOciOpensearchOpensearchClustersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>>

---


### DataOciOpensearchOpensearchClustersFilterOutputReference <a name="DataOciOpensearchOpensearchClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersFilterOutputReference;

new DataOciOpensearchOpensearchClustersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersFilter">DataOciOpensearchOpensearchClustersFilter</a>

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList;

new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get"></a>

```java
public DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference;

new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.availabilityDomains">availabilityDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeCount">dataNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostBareMetalShape">dataNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostMemoryGb">dataNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostOcpuCount">dataNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostType">dataNodeHostType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeStorageGb">dataNodeStorageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeCount">masterNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostBareMetalShape">masterNodeHostBareMetalShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostMemoryGb">masterNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostOcpuCount">masterNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostType">masterNodeHostType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardFqdn">opendashboardFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeCount">opendashboardNodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostMemoryGb">opendashboardNodeHostMemoryGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostOcpuCount">opendashboardNodeHostOcpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardPrivateIp">opendashboardPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchFqdn">opensearchFqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchPrivateIp">opensearchPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserName">securityMasterUserName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserPasswordHash">securityMasterUserPasswordHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMode">securityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.softwareVersion">softwareVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetCompartmentId">subnetCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeDeleted">timeDeleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.totalStorageGb">totalStorageGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnCompartmentId">vcnCompartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomains`<sup>Required</sup> <a name="availabilityDomains" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.availabilityDomains"></a>

```java
public java.util.List<java.lang.String> getAvailabilityDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dataNodeCount`<sup>Required</sup> <a name="dataNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeCount"></a>

```java
public java.lang.Number getDataNodeCount();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostBareMetalShape`<sup>Required</sup> <a name="dataNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostBareMetalShape"></a>

```java
public java.lang.String getDataNodeHostBareMetalShape();
```

- *Type:* java.lang.String

---

##### `dataNodeHostMemoryGb`<sup>Required</sup> <a name="dataNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostMemoryGb"></a>

```java
public java.lang.Number getDataNodeHostMemoryGb();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostOcpuCount`<sup>Required</sup> <a name="dataNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostOcpuCount"></a>

```java
public java.lang.Number getDataNodeHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `dataNodeHostType`<sup>Required</sup> <a name="dataNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeHostType"></a>

```java
public java.lang.String getDataNodeHostType();
```

- *Type:* java.lang.String

---

##### `dataNodeStorageGb`<sup>Required</sup> <a name="dataNodeStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.dataNodeStorageGb"></a>

```java
public java.lang.Number getDataNodeStorageGb();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `masterNodeCount`<sup>Required</sup> <a name="masterNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeCount"></a>

```java
public java.lang.Number getMasterNodeCount();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostBareMetalShape`<sup>Required</sup> <a name="masterNodeHostBareMetalShape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostBareMetalShape"></a>

```java
public java.lang.String getMasterNodeHostBareMetalShape();
```

- *Type:* java.lang.String

---

##### `masterNodeHostMemoryGb`<sup>Required</sup> <a name="masterNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostMemoryGb"></a>

```java
public java.lang.Number getMasterNodeHostMemoryGb();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostOcpuCount`<sup>Required</sup> <a name="masterNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostOcpuCount"></a>

```java
public java.lang.Number getMasterNodeHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `masterNodeHostType`<sup>Required</sup> <a name="masterNodeHostType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.masterNodeHostType"></a>

```java
public java.lang.String getMasterNodeHostType();
```

- *Type:* java.lang.String

---

##### `opendashboardFqdn`<sup>Required</sup> <a name="opendashboardFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardFqdn"></a>

```java
public java.lang.String getOpendashboardFqdn();
```

- *Type:* java.lang.String

---

##### `opendashboardNodeCount`<sup>Required</sup> <a name="opendashboardNodeCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeCount"></a>

```java
public java.lang.Number getOpendashboardNodeCount();
```

- *Type:* java.lang.Number

---

##### `opendashboardNodeHostMemoryGb`<sup>Required</sup> <a name="opendashboardNodeHostMemoryGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostMemoryGb"></a>

```java
public java.lang.Number getOpendashboardNodeHostMemoryGb();
```

- *Type:* java.lang.Number

---

##### `opendashboardNodeHostOcpuCount`<sup>Required</sup> <a name="opendashboardNodeHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardNodeHostOcpuCount"></a>

```java
public java.lang.Number getOpendashboardNodeHostOcpuCount();
```

- *Type:* java.lang.Number

---

##### `opendashboardPrivateIp`<sup>Required</sup> <a name="opendashboardPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opendashboardPrivateIp"></a>

```java
public java.lang.String getOpendashboardPrivateIp();
```

- *Type:* java.lang.String

---

##### `opensearchFqdn`<sup>Required</sup> <a name="opensearchFqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchFqdn"></a>

```java
public java.lang.String getOpensearchFqdn();
```

- *Type:* java.lang.String

---

##### `opensearchPrivateIp`<sup>Required</sup> <a name="opensearchPrivateIp" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.opensearchPrivateIp"></a>

```java
public java.lang.String getOpensearchPrivateIp();
```

- *Type:* java.lang.String

---

##### `securityMasterUserName`<sup>Required</sup> <a name="securityMasterUserName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserName"></a>

```java
public java.lang.String getSecurityMasterUserName();
```

- *Type:* java.lang.String

---

##### `securityMasterUserPasswordHash`<sup>Required</sup> <a name="securityMasterUserPasswordHash" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMasterUserPasswordHash"></a>

```java
public java.lang.String getSecurityMasterUserPasswordHash();
```

- *Type:* java.lang.String

---

##### `securityMode`<sup>Required</sup> <a name="securityMode" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.securityMode"></a>

```java
public java.lang.String getSecurityMode();
```

- *Type:* java.lang.String

---

##### `softwareVersion`<sup>Required</sup> <a name="softwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.softwareVersion"></a>

```java
public java.lang.String getSoftwareVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetCompartmentId`<sup>Required</sup> <a name="subnetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetCompartmentId"></a>

```java
public java.lang.String getSubnetCompartmentId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeDeleted`<sup>Required</sup> <a name="timeDeleted" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeDeleted"></a>

```java
public java.lang.String getTimeDeleted();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalStorageGb`<sup>Required</sup> <a name="totalStorageGb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.totalStorageGb"></a>

```java
public java.lang.Number getTotalStorageGb();
```

- *Type:* java.lang.Number

---

##### `vcnCompartmentId`<sup>Required</sup> <a name="vcnCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnCompartmentId"></a>

```java
public java.lang.String getVcnCompartmentId();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItems</a>

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList;

new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get"></a>

```java
public DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference <a name="DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opensearch_opensearch_clusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference;

new DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection">DataOciOpensearchOpensearchClustersOpensearchClusterCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.items"></a>

```java
public DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList">DataOciOpensearchOpensearchClustersOpensearchClusterCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOpensearchOpensearchClustersOpensearchClusterCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchClusters.DataOciOpensearchOpensearchClustersOpensearchClusterCollection">DataOciOpensearchOpensearchClustersOpensearchClusterCollection</a>

---



