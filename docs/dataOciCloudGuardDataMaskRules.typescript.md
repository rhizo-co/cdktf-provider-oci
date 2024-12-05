# `dataOciCloudGuardDataMaskRules` Submodule <a name="`dataOciCloudGuardDataMaskRules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDataMaskRules <a name="DataOciCloudGuardDataMaskRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules oci_cloud_guard_data_mask_rules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules(scope: Construct, id: string, config: DataOciCloudGuardDataMaskRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig">DataOciCloudGuardDataMaskRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig">DataOciCloudGuardDataMaskRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetDataMaskRuleStatus">resetDataMaskRuleStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetIamGroupId">resetIamGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetTargetType">resetTargetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciCloudGuardDataMaskRulesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>[]

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetDataMaskRuleStatus` <a name="resetDataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetDataMaskRuleStatus"></a>

```typescript
public resetDataMaskRuleStatus(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetIamGroupId` <a name="resetIamGroupId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetIamGroupId"></a>

```typescript
public resetIamGroupId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetState"></a>

```typescript
public resetState(): void
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetTargetId"></a>

```typescript
public resetTargetId(): void
```

##### `resetTargetType` <a name="resetTargetType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.resetTargetType"></a>

```typescript
public resetTargetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDataMaskRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isConstruct"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformElement"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformDataSource"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.generateConfigForImport"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciCloudGuardDataMaskRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardDataMaskRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardDataMaskRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDataMaskRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dataMaskRuleCollection">dataMaskRuleCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList">DataOciCloudGuardDataMaskRulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dataMaskRuleStatusInput">dataMaskRuleStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.iamGroupIdInput">iamGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dataMaskRuleStatus">dataMaskRuleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.iamGroupId">iamGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataMaskRuleCollection`<sup>Required</sup> <a name="dataMaskRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dataMaskRuleCollection"></a>

```typescript
public readonly dataMaskRuleCollection: DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.filter"></a>

```typescript
public readonly filter: DataOciCloudGuardDataMaskRulesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList">DataOciCloudGuardDataMaskRulesFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `dataMaskRuleStatusInput`<sup>Optional</sup> <a name="dataMaskRuleStatusInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dataMaskRuleStatusInput"></a>

```typescript
public readonly dataMaskRuleStatusInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciCloudGuardDataMaskRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>[]

---

##### `iamGroupIdInput`<sup>Optional</sup> <a name="iamGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.iamGroupIdInput"></a>

```typescript
public readonly iamGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataMaskRuleStatus`<sup>Required</sup> <a name="dataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.dataMaskRuleStatus"></a>

```typescript
public readonly dataMaskRuleStatus: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `iamGroupId`<sup>Required</sup> <a name="iamGroupId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.iamGroupId"></a>

```typescript
public readonly iamGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDataMaskRulesConfig <a name="DataOciCloudGuardDataMaskRulesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataMaskRulesConfig: dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#compartment_id DataOciCloudGuardDataMaskRules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.accessLevel">accessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#access_level DataOciCloudGuardDataMaskRules#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.dataMaskRuleStatus">dataMaskRuleStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#data_mask_rule_status DataOciCloudGuardDataMaskRules#data_mask_rule_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#display_name DataOciCloudGuardDataMaskRules#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.iamGroupId">iamGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#iam_group_id DataOciCloudGuardDataMaskRules#iam_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#id DataOciCloudGuardDataMaskRules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#state DataOciCloudGuardDataMaskRules#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#target_id DataOciCloudGuardDataMaskRules#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#target_type DataOciCloudGuardDataMaskRules#target_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#compartment_id DataOciCloudGuardDataMaskRules#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#access_level DataOciCloudGuardDataMaskRules#access_level}.

---

##### `dataMaskRuleStatus`<sup>Optional</sup> <a name="dataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.dataMaskRuleStatus"></a>

```typescript
public readonly dataMaskRuleStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#data_mask_rule_status DataOciCloudGuardDataMaskRules#data_mask_rule_status}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#display_name DataOciCloudGuardDataMaskRules#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciCloudGuardDataMaskRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#filter DataOciCloudGuardDataMaskRules#filter}

---

##### `iamGroupId`<sup>Optional</sup> <a name="iamGroupId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.iamGroupId"></a>

```typescript
public readonly iamGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#iam_group_id DataOciCloudGuardDataMaskRules#iam_group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#id DataOciCloudGuardDataMaskRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#state DataOciCloudGuardDataMaskRules#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#target_id DataOciCloudGuardDataMaskRules#target_id}.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesConfig.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#target_type DataOciCloudGuardDataMaskRules#target_type}.

---

### DataOciCloudGuardDataMaskRulesDataMaskRuleCollection <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollection.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataMaskRulesDataMaskRuleCollection: dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollection = { ... }
```


### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems: dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems = { ... }
```


### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected: dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected = { ... }
```


### DataOciCloudGuardDataMaskRulesFilter <a name="DataOciCloudGuardDataMaskRulesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

const dataOciCloudGuardDataMaskRulesFilter: dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#name DataOciCloudGuardDataMaskRules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#values DataOciCloudGuardDataMaskRules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#regex DataOciCloudGuardDataMaskRules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#name DataOciCloudGuardDataMaskRules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#values DataOciCloudGuardDataMaskRules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_mask_rules#regex DataOciCloudGuardDataMaskRules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.dataMaskCategories">dataMaskCategories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.dataMaskRuleStatus">dataMaskRuleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.iamGroupId">iamGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.lifecyleDetails">lifecyleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.targetSelected">targetSelected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `dataMaskCategories`<sup>Required</sup> <a name="dataMaskCategories" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.dataMaskCategories"></a>

```typescript
public readonly dataMaskCategories: string[];
```

- *Type:* string[]

---

##### `dataMaskRuleStatus`<sup>Required</sup> <a name="dataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.dataMaskRuleStatus"></a>

```typescript
public readonly dataMaskRuleStatus: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `iamGroupId`<sup>Required</sup> <a name="iamGroupId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.iamGroupId"></a>

```typescript
public readonly iamGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.lifecyleDetails"></a>

```typescript
public readonly lifecyleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `targetSelected`<sup>Required</sup> <a name="targetSelected" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.targetSelected"></a>

```typescript
public readonly targetSelected: DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItems</a>

---


### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelectedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsTargetSelected</a>

---


### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference <a name="DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollection">DataOciCloudGuardDataMaskRulesDataMaskRuleCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList">DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciCloudGuardDataMaskRulesDataMaskRuleCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesDataMaskRuleCollection">DataOciCloudGuardDataMaskRulesDataMaskRuleCollection</a>

---


### DataOciCloudGuardDataMaskRulesFilterList <a name="DataOciCloudGuardDataMaskRulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.get"></a>

```typescript
public get(index: number): DataOciCloudGuardDataMaskRulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardDataMaskRulesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>[]

---


### DataOciCloudGuardDataMaskRulesFilterOutputReference <a name="DataOciCloudGuardDataMaskRulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciCloudGuardDataMaskRules } from 'rhizo-co-terraform-provider-oci'

new dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciCloudGuardDataMaskRulesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataMaskRules.DataOciCloudGuardDataMaskRulesFilter">DataOciCloudGuardDataMaskRulesFilter</a>

---



