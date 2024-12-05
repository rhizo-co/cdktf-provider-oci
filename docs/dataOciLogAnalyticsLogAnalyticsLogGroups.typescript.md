# `dataOciLogAnalyticsLogAnalyticsLogGroups` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsLogGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroups <a name="DataOciLogAnalyticsLogAnalyticsLogGroups" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups oci_log_analytics_log_analytics_log_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsLogGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig">DataOciLogAnalyticsLogAnalyticsLogGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLogAnalyticsLogAnalyticsLogGroupsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroups resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsLogGroups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsLogGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsLogGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsLogGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList">DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.logAnalyticsLogGroupSummaryCollection">logAnalyticsLogGroupSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filter"></a>

```typescript
public readonly filter: DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList">DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList</a>

---

##### `logAnalyticsLogGroupSummaryCollection`<sup>Required</sup> <a name="logAnalyticsLogGroupSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.logAnalyticsLogGroupSummaryCollection"></a>

```typescript
public readonly logAnalyticsLogGroupSummaryCollection: DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLogAnalyticsLogAnalyticsLogGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsConfig <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsLogGroupsConfig: dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroups#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#namespace DataOciLogAnalyticsLogAnalyticsLogGroups#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#display_name DataOciLogAnalyticsLogAnalyticsLogGroups#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#id DataOciLogAnalyticsLogAnalyticsLogGroups#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#compartment_id DataOciLogAnalyticsLogAnalyticsLogGroups#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#namespace DataOciLogAnalyticsLogAnalyticsLogGroups#namespace}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#display_name DataOciLogAnalyticsLogAnalyticsLogGroups#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLogAnalyticsLogAnalyticsLogGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#filter DataOciLogAnalyticsLogAnalyticsLogGroups#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#id DataOciLogAnalyticsLogAnalyticsLogGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLogAnalyticsLogAnalyticsLogGroupsFilter <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsLogGroupsFilter: dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#name DataOciLogAnalyticsLogAnalyticsLogGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#values DataOciLogAnalyticsLogAnalyticsLogGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#regex DataOciLogAnalyticsLogAnalyticsLogGroups#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#name DataOciLogAnalyticsLogAnalyticsLogGroups#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#values DataOciLogAnalyticsLogAnalyticsLogGroups#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_log_groups#regex DataOciLogAnalyticsLogAnalyticsLogGroups#regex}.

---

### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection: dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection = { ... }
```


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems: dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsLogAnalyticsLogGroupsFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>[]

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsLogAnalyticsLogGroupsFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsFilter">DataOciLogAnalyticsLogAnalyticsLogGroupsFilter</a>

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsLogGroups } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsLogGroups.DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection">DataOciLogAnalyticsLogAnalyticsLogGroupsLogAnalyticsLogGroupSummaryCollection</a>

---



