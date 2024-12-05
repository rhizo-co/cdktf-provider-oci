# `dataOciOsubUsageComputedUsage` Submodule <a name="`dataOciOsubUsageComputedUsage` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubUsageComputedUsage <a name="DataOciOsubUsageComputedUsage" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage oci_osub_usage_computed_usage}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsage;

DataOciOsubUsageComputedUsage.Builder.create(Construct scope, java.lang.String id)
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
    .computedUsageId(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .xOneOriginRegion(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.computedUsageId">computedUsageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.xOneOriginRegion">xOneOriginRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}.

---

##### `computedUsageId`<sup>Required</sup> <a name="computedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.computedUsageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.fields"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetXOneOriginRegion">resetXOneOriginRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFields` <a name="resetFields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetFields"></a>

```java
public void resetFields()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetId"></a>

```java
public void resetId()
```

##### `resetXOneOriginRegion` <a name="resetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.resetXOneOriginRegion"></a>

```java
public void resetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubUsageComputedUsage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsage;

DataOciOsubUsageComputedUsage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsage;

DataOciOsubUsageComputedUsage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsage;

DataOciOsubUsageComputedUsage.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsage;

DataOciOsubUsageComputedUsage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOsubUsageComputedUsage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOsubUsageComputedUsage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOsubUsageComputedUsage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOsubUsageComputedUsage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubUsageComputedUsage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.commitmentServiceId">commitmentServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computeSource">computeSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cost">cost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.costRounded">costRounded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.currencyCode">currencyCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dataCenter">dataCenter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.isInvoiced">isInvoiced</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.mqsMessageId">mqsMessageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.netUnitPrice">netUnitPrice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.originalUsageNumber">originalUsageNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentProduct">parentProduct</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList">DataOciOsubUsageComputedUsageParentProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentSubscribedServiceId">parentSubscribedServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.planNumber">planNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList">DataOciOsubUsageComputedUsageProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.quantity">quantity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardId">rateCardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardTierdId">rateCardTierdId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeMeteredOn">timeMeteredOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeOfArrival">timeOfArrival</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.unitOfMeasure">unitOfMeasure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.usageNumber">usageNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageIdInput">computedUsageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fieldsInput">fieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegionInput">xOneOriginRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageId">computedUsageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `commitmentServiceId`<sup>Required</sup> <a name="commitmentServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.commitmentServiceId"></a>

```java
public java.lang.String getCommitmentServiceId();
```

- *Type:* java.lang.String

---

##### `computeSource`<sup>Required</sup> <a name="computeSource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computeSource"></a>

```java
public java.lang.String getComputeSource();
```

- *Type:* java.lang.String

---

##### `cost`<sup>Required</sup> <a name="cost" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.cost"></a>

```java
public java.lang.String getCost();
```

- *Type:* java.lang.String

---

##### `costRounded`<sup>Required</sup> <a name="costRounded" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.costRounded"></a>

```java
public java.lang.String getCostRounded();
```

- *Type:* java.lang.String

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.currencyCode"></a>

```java
public java.lang.String getCurrencyCode();
```

- *Type:* java.lang.String

---

##### `dataCenter`<sup>Required</sup> <a name="dataCenter" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.dataCenter"></a>

```java
public java.lang.String getDataCenter();
```

- *Type:* java.lang.String

---

##### `isInvoiced`<sup>Required</sup> <a name="isInvoiced" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.isInvoiced"></a>

```java
public IResolvable getIsInvoiced();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `mqsMessageId`<sup>Required</sup> <a name="mqsMessageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.mqsMessageId"></a>

```java
public java.lang.String getMqsMessageId();
```

- *Type:* java.lang.String

---

##### `netUnitPrice`<sup>Required</sup> <a name="netUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.netUnitPrice"></a>

```java
public java.lang.String getNetUnitPrice();
```

- *Type:* java.lang.String

---

##### `originalUsageNumber`<sup>Required</sup> <a name="originalUsageNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.originalUsageNumber"></a>

```java
public java.lang.String getOriginalUsageNumber();
```

- *Type:* java.lang.String

---

##### `parentProduct`<sup>Required</sup> <a name="parentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentProduct"></a>

```java
public DataOciOsubUsageComputedUsageParentProductList getParentProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList">DataOciOsubUsageComputedUsageParentProductList</a>

---

##### `parentSubscribedServiceId`<sup>Required</sup> <a name="parentSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.parentSubscribedServiceId"></a>

```java
public java.lang.String getParentSubscribedServiceId();
```

- *Type:* java.lang.String

---

##### `planNumber`<sup>Required</sup> <a name="planNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.planNumber"></a>

```java
public java.lang.String getPlanNumber();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.product"></a>

```java
public DataOciOsubUsageComputedUsageProductList getProduct();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList">DataOciOsubUsageComputedUsageProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.quantity"></a>

```java
public java.lang.String getQuantity();
```

- *Type:* java.lang.String

---

##### `rateCardId`<sup>Required</sup> <a name="rateCardId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardId"></a>

```java
public java.lang.String getRateCardId();
```

- *Type:* java.lang.String

---

##### `rateCardTierdId`<sup>Required</sup> <a name="rateCardTierdId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.rateCardTierdId"></a>

```java
public java.lang.String getRateCardTierdId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeMeteredOn`<sup>Required</sup> <a name="timeMeteredOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeMeteredOn"></a>

```java
public java.lang.String getTimeMeteredOn();
```

- *Type:* java.lang.String

---

##### `timeOfArrival`<sup>Required</sup> <a name="timeOfArrival" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeOfArrival"></a>

```java
public java.lang.String getTimeOfArrival();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.unitOfMeasure"></a>

```java
public java.lang.String getUnitOfMeasure();
```

- *Type:* java.lang.String

---

##### `usageNumber`<sup>Required</sup> <a name="usageNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.usageNumber"></a>

```java
public java.lang.String getUsageNumber();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `computedUsageIdInput`<sup>Optional</sup> <a name="computedUsageIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageIdInput"></a>

```java
public java.lang.String getComputedUsageIdInput();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fieldsInput"></a>

```java
public java.util.List<java.lang.String> getFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `xOneOriginRegionInput`<sup>Optional</sup> <a name="xOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegionInput"></a>

```java
public java.lang.String getXOneOriginRegionInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computedUsageId`<sup>Required</sup> <a name="computedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.computedUsageId"></a>

```java
public java.lang.String getComputedUsageId();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `xOneOriginRegion`<sup>Required</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.xOneOriginRegion"></a>

```java
public java.lang.String getXOneOriginRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubUsageComputedUsageConfig <a name="DataOciOsubUsageComputedUsageConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsageConfig;

DataOciOsubUsageComputedUsageConfig.builder()
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
    .computedUsageId(java.lang.String)
//  .fields(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .xOneOriginRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.computedUsageId">computedUsageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.fields">fields</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.xOneOriginRegion">xOneOriginRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#compartment_id DataOciOsubUsageComputedUsage#compartment_id}.

---

##### `computedUsageId`<sup>Required</sup> <a name="computedUsageId" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.computedUsageId"></a>

```java
public java.lang.String getComputedUsageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#computed_usage_id DataOciOsubUsageComputedUsage#computed_usage_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.fields"></a>

```java
public java.util.List<java.lang.String> getFields();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#fields DataOciOsubUsageComputedUsage#fields}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#id DataOciOsubUsageComputedUsage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `xOneOriginRegion`<sup>Optional</sup> <a name="xOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageConfig.property.xOneOriginRegion"></a>

```java
public java.lang.String getXOneOriginRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_usage_computed_usage#x_one_origin_region DataOciOsubUsageComputedUsage#x_one_origin_region}.

---

### DataOciOsubUsageComputedUsageParentProduct <a name="DataOciOsubUsageComputedUsageParentProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsageParentProduct;

DataOciOsubUsageComputedUsageParentProduct.builder()
    .build();
```


### DataOciOsubUsageComputedUsageProduct <a name="DataOciOsubUsageComputedUsageProduct" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsageProduct;

DataOciOsubUsageComputedUsageProduct.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubUsageComputedUsageParentProductList <a name="DataOciOsubUsageComputedUsageParentProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsageParentProductList;

new DataOciOsubUsageComputedUsageParentProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get"></a>

```java
public DataOciOsubUsageComputedUsageParentProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsubUsageComputedUsageParentProductOutputReference <a name="DataOciOsubUsageComputedUsageParentProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsageParentProductOutputReference;

new DataOciOsubUsageComputedUsageParentProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.productCategory">productCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct">DataOciOsubUsageComputedUsageParentProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.billingCategory"></a>

```java
public java.lang.String getBillingCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.productCategory"></a>

```java
public java.lang.String getProductCategory();
```

- *Type:* java.lang.String

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.provisioningGroup"></a>

```java
public java.lang.String getProvisioningGroup();
```

- *Type:* java.lang.String

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.ucmRateCardPartType"></a>

```java
public java.lang.String getUcmRateCardPartType();
```

- *Type:* java.lang.String

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.unitOfMeasure"></a>

```java
public java.lang.String getUnitOfMeasure();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProductOutputReference.property.internalValue"></a>

```java
public DataOciOsubUsageComputedUsageParentProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageParentProduct">DataOciOsubUsageComputedUsageParentProduct</a>

---


### DataOciOsubUsageComputedUsageProductList <a name="DataOciOsubUsageComputedUsageProductList" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsageProductList;

new DataOciOsubUsageComputedUsageProductList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get"></a>

```java
public DataOciOsubUsageComputedUsageProductOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOsubUsageComputedUsageProductOutputReference <a name="DataOciOsubUsageComputedUsageProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_osub_usage_computed_usage.DataOciOsubUsageComputedUsageProductOutputReference;

new DataOciOsubUsageComputedUsageProductOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.billingCategory">billingCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.partNumber">partNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.productCategory">productCategory</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.provisioningGroup">provisioningGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.ucmRateCardPartType">ucmRateCardPartType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.unitOfMeasure">unitOfMeasure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct">DataOciOsubUsageComputedUsageProduct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `billingCategory`<sup>Required</sup> <a name="billingCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.billingCategory"></a>

```java
public java.lang.String getBillingCategory();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `partNumber`<sup>Required</sup> <a name="partNumber" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.partNumber"></a>

```java
public java.lang.String getPartNumber();
```

- *Type:* java.lang.String

---

##### `productCategory`<sup>Required</sup> <a name="productCategory" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.productCategory"></a>

```java
public java.lang.String getProductCategory();
```

- *Type:* java.lang.String

---

##### `provisioningGroup`<sup>Required</sup> <a name="provisioningGroup" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.provisioningGroup"></a>

```java
public java.lang.String getProvisioningGroup();
```

- *Type:* java.lang.String

---

##### `ucmRateCardPartType`<sup>Required</sup> <a name="ucmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.ucmRateCardPartType"></a>

```java
public java.lang.String getUcmRateCardPartType();
```

- *Type:* java.lang.String

---

##### `unitOfMeasure`<sup>Required</sup> <a name="unitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.unitOfMeasure"></a>

```java
public java.lang.String getUnitOfMeasure();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProductOutputReference.property.internalValue"></a>

```java
public DataOciOsubUsageComputedUsageProduct getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubUsageComputedUsage.DataOciOsubUsageComputedUsageProduct">DataOciOsubUsageComputedUsageProduct</a>

---



