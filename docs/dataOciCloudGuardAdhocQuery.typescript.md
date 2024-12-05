# `dataOciCloudGuardAdhocQuery` Submodule <a name="`dataOciCloudGuardAdhocQuery` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardAdhocQuery <a name="DataOciCloudGuardAdhocQuery" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query oci_cloud_guard_adhoc_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery(scope: Construct, id: string, config: DataOciCloudGuardAdhocQueryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig">DataOciCloudGuardAdhocQueryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig">DataOciCloudGuardAdhocQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardAdhocQuery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isConstruct"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardAdhocQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardAdhocQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardAdhocQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardAdhocQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryDetails">adhocQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryRegionalDetails">adhocQueryRegionalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.errorMessage">errorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryIdInput">adhocQueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryId">adhocQueryId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adhocQueryDetails`<sup>Required</sup> <a name="adhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryDetails"></a>

```typescript
public readonly adhocQueryDetails: DataOciCloudGuardAdhocQueryAdhocQueryDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsList</a>

---

##### `adhocQueryRegionalDetails`<sup>Required</sup> <a name="adhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryRegionalDetails"></a>

```typescript
public readonly adhocQueryRegionalDetails: DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.errorMessage"></a>

```typescript
public readonly errorMessage: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `adhocQueryIdInput`<sup>Optional</sup> <a name="adhocQueryIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryIdInput"></a>

```typescript
public readonly adhocQueryIdInput: string;
```

- *Type:* string

---

##### `adhocQueryId`<sup>Required</sup> <a name="adhocQueryId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.adhocQueryId"></a>

```typescript
public readonly adhocQueryId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQuery.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardAdhocQueryAdhocQueryDetails <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueryAdhocQueryDetails: dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails = { ... }
```


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources: dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources = { ... }
```


### DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails <a name="DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails: dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails = { ... }
```


### DataOciCloudGuardAdhocQueryConfig <a name="DataOciCloudGuardAdhocQueryConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardAdhocQueryConfig: dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.adhocQueryId">adhocQueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query#adhoc_query_id DataOciCloudGuardAdhocQuery#adhoc_query_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adhocQueryId`<sup>Required</sup> <a name="adhocQueryId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryConfig.property.adhocQueryId"></a>

```typescript
public readonly adhocQueryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_query#adhoc_query_id DataOciCloudGuardAdhocQuery#adhoc_query_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds">resourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds"></a>

```typescript
public readonly resourceIds: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResources</a>

---


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsList <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference <a name="DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResources">adhocQueryResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails">DataOciCloudGuardAdhocQueryAdhocQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adhocQueryResources`<sup>Required</sup> <a name="adhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.adhocQueryResources"></a>

```typescript
public readonly adhocQueryResources: DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueryAdhocQueryDetailsAdhocQueryResourcesList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueryAdhocQueryDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryDetails">DataOciCloudGuardAdhocQueryAdhocQueryDetails</a>

---


### DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList <a name="DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference <a name="DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardAdhocQuery } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expectedCount">expectedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expiredCount">expiredCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.failedCount">failedCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalError">regionalError</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalStatus">regionalStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.succeededCount">succeededCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expectedCount`<sup>Required</sup> <a name="expectedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expectedCount"></a>

```typescript
public readonly expectedCount: string;
```

- *Type:* string

---

##### `expiredCount`<sup>Required</sup> <a name="expiredCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.expiredCount"></a>

```typescript
public readonly expiredCount: string;
```

- *Type:* string

---

##### `failedCount`<sup>Required</sup> <a name="failedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.failedCount"></a>

```typescript
public readonly failedCount: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regionalError`<sup>Required</sup> <a name="regionalError" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalError"></a>

```typescript
public readonly regionalError: string;
```

- *Type:* string

---

##### `regionalStatus`<sup>Required</sup> <a name="regionalStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.regionalStatus"></a>

```typescript
public readonly regionalStatus: string;
```

- *Type:* string

---

##### `succeededCount`<sup>Required</sup> <a name="succeededCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.succeededCount"></a>

```typescript
public readonly succeededCount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQuery.DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueryAdhocQueryRegionalDetails</a>

---



