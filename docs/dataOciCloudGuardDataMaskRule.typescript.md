# `dataOciCloudGuardDataMaskRule` Submodule <a name="`dataOciCloudGuardDataMaskRule` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDataMaskRule <a name="DataOciCloudGuardDataMaskRule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rule oci_cloud_guard_data_mask_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule(scope: Construct, id: string, config: DataOciCloudGuardDataMaskRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig">DataOciCloudGuardDataMaskRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig">DataOciCloudGuardDataMaskRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isConstruct"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardDataMaskRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardDataMaskRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDataMaskRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskCategories">dataMaskCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskRuleStatus">dataMaskRuleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.iamGroupId">iamGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.targetSelected">targetSelected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList">DataOciCloudGuardDataMaskRuleTargetSelectedList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskRuleIdInput">dataMaskRuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskRuleId">dataMaskRuleId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataMaskCategories`<sup>Required</sup> <a name="dataMaskCategories" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskCategories"></a>

```typescript
public readonly dataMaskCategories: string[];
```

- *Type:* string[]

---

##### `dataMaskRuleStatus`<sup>Required</sup> <a name="dataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskRuleStatus"></a>

```typescript
public readonly dataMaskRuleStatus: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `iamGroupId`<sup>Required</sup> <a name="iamGroupId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.iamGroupId"></a>

```typescript
public readonly iamGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetSelected`<sup>Required</sup> <a name="targetSelected" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.targetSelected"></a>

```typescript
public readonly targetSelected: DataOciCloudGuardDataMaskRuleTargetSelectedList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList">DataOciCloudGuardDataMaskRuleTargetSelectedList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `dataMaskRuleIdInput`<sup>Optional</sup> <a name="dataMaskRuleIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskRuleIdInput"></a>

```typescript
public readonly dataMaskRuleIdInput: string;
```

- *Type:* string

---

##### `dataMaskRuleId`<sup>Required</sup> <a name="dataMaskRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.dataMaskRuleId"></a>

```typescript
public readonly dataMaskRuleId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDataMaskRuleConfig <a name="DataOciCloudGuardDataMaskRuleConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataMaskRuleConfig: dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.dataMaskRuleId">dataMaskRuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rule#data_mask_rule_id DataOciCloudGuardDataMaskRule#data_mask_rule_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataMaskRuleId`<sup>Required</sup> <a name="dataMaskRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleConfig.property.dataMaskRuleId"></a>

```typescript
public readonly dataMaskRuleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rule#data_mask_rule_id DataOciCloudGuardDataMaskRule#data_mask_rule_id}.

---

### DataOciCloudGuardDataMaskRuleTargetSelected <a name="DataOciCloudGuardDataMaskRuleTargetSelected" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelected"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelected.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataMaskRuleTargetSelected: dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelected = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDataMaskRuleTargetSelectedList <a name="DataOciCloudGuardDataMaskRuleTargetSelectedList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference <a name="DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRule } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelected">DataOciCloudGuardDataMaskRuleTargetSelected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataMaskRuleTargetSelected;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRule.DataOciCloudGuardDataMaskRuleTargetSelected">DataOciCloudGuardDataMaskRuleTargetSelected</a>

---



