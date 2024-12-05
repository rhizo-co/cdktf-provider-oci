# `dataOciWafProtectionCapabilityGroupTags` Submodule <a name="`dataOciWafProtectionCapabilityGroupTags` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafProtectionCapabilityGroupTags <a name="DataOciWafProtectionCapabilityGroupTags" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags oci_waf_protection_capability_group_tags}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags(scope: Construct, id: string, config: DataOciWafProtectionCapabilityGroupTagsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig">DataOciWafProtectionCapabilityGroupTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig">DataOciWafProtectionCapabilityGroupTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciWafProtectionCapabilityGroupTagsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetName"></a>

```typescript
public resetName(): void
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciWafProtectionCapabilityGroupTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciWafProtectionCapabilityGroupTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciWafProtectionCapabilityGroupTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafProtectionCapabilityGroupTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection">protectionCapabilityGroupTagCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filter"></a>

```typescript
public readonly filter: DataOciWafProtectionCapabilityGroupTagsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList">DataOciWafProtectionCapabilityGroupTagsFilterList</a>

---

##### `protectionCapabilityGroupTagCollection`<sup>Required</sup> <a name="protectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.protectionCapabilityGroupTagCollection"></a>

```typescript
public readonly protectionCapabilityGroupTagCollection: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciWafProtectionCapabilityGroupTagsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTags.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafProtectionCapabilityGroupTagsConfig <a name="DataOciWafProtectionCapabilityGroupTagsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilityGroupTagsConfig: dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#compartment_id DataOciWafProtectionCapabilityGroupTags#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciWafProtectionCapabilityGroupTagsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#filter DataOciWafProtectionCapabilityGroupTags#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#id DataOciWafProtectionCapabilityGroupTags#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#type DataOciWafProtectionCapabilityGroupTags#type}.

---

### DataOciWafProtectionCapabilityGroupTagsFilter <a name="DataOciWafProtectionCapabilityGroupTagsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilityGroupTagsFilter: dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#name DataOciWafProtectionCapabilityGroupTags#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#values DataOciWafProtectionCapabilityGroupTags#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_protection_capability_group_tags#regex DataOciWafProtectionCapabilityGroupTags#regex}.

---

### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection: dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection = { ... }
```


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

const dataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems: dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafProtectionCapabilityGroupTagsFilterList <a name="DataOciWafProtectionCapabilityGroupTagsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get"></a>

```typescript
public get(index: number): DataOciWafProtectionCapabilityGroupTagsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafProtectionCapabilityGroupTagsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>[]

---


### DataOciWafProtectionCapabilityGroupTagsFilterOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciWafProtectionCapabilityGroupTagsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsFilter">DataOciWafProtectionCapabilityGroupTagsFilter</a>

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItems</a>

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get"></a>

```typescript
public get(index: number): DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference <a name="DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciWafProtectionCapabilityGroupTags } from 'rhizo-co-terraform-provider-oci'

new dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafProtectionCapabilityGroupTags.DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection">DataOciWafProtectionCapabilityGroupTagsProtectionCapabilityGroupTagCollection</a>

---



