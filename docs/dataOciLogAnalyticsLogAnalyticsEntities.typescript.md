# `dataOciLogAnalyticsLogAnalyticsEntities` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntities <a name="DataOciLogAnalyticsLogAnalyticsEntities" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities oci_log_analytics_log_analytics_entities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities(scope: Construct, id: string, config: DataOciLogAnalyticsLogAnalyticsEntitiesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig">DataOciLogAnalyticsLogAnalyticsEntitiesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig">DataOciLogAnalyticsLogAnalyticsEntitiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId">resetCloudResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName">resetEntityTypeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains">resetHostnameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull">resetIsManagementAgentIdNull</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains">resetLifecycleDetailsContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals">resetMetadataEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains">resetNameContains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciLogAnalyticsLogAnalyticsEntitiesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>[]

---

##### `resetCloudResourceId` <a name="resetCloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId"></a>

```typescript
public resetCloudResourceId(): void
```

##### `resetEntityTypeName` <a name="resetEntityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName"></a>

```typescript
public resetEntityTypeName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetHostname` <a name="resetHostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetHostnameContains` <a name="resetHostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains"></a>

```typescript
public resetHostnameContains(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsManagementAgentIdNull` <a name="resetIsManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull"></a>

```typescript
public resetIsManagementAgentIdNull(): void
```

##### `resetLifecycleDetailsContains` <a name="resetLifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains"></a>

```typescript
public resetLifecycleDetailsContains(): void
```

##### `resetMetadataEquals` <a name="resetMetadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals"></a>

```typescript
public resetMetadataEquals(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameContains` <a name="resetNameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains"></a>

```typescript
public resetNameContains(): void
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId"></a>

```typescript
public resetSourceId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntities to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLogAnalyticsLogAnalyticsEntities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection">logAnalyticsEntityCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput">cloudResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput">entityTypeNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput">hostnameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput">isManagementAgentIdNullInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput">lifecycleDetailsContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput">metadataEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput">nameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId">cloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName">entityTypeName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains">hostnameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull">isManagementAgentIdNull</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains">lifecycleDetailsContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals">metadataEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains">nameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter"></a>

```typescript
public readonly filter: DataOciLogAnalyticsLogAnalyticsEntitiesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a>

---

##### `logAnalyticsEntityCollection`<sup>Required</sup> <a name="logAnalyticsEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection"></a>

```typescript
public readonly logAnalyticsEntityCollection: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a>

---

##### `cloudResourceIdInput`<sup>Optional</sup> <a name="cloudResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput"></a>

```typescript
public readonly cloudResourceIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `entityTypeNameInput`<sup>Optional</sup> <a name="entityTypeNameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput"></a>

```typescript
public readonly entityTypeNameInput: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciLogAnalyticsLogAnalyticsEntitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>[]

---

##### `hostnameContainsInput`<sup>Optional</sup> <a name="hostnameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput"></a>

```typescript
public readonly hostnameContainsInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isManagementAgentIdNullInput`<sup>Optional</sup> <a name="isManagementAgentIdNullInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput"></a>

```typescript
public readonly isManagementAgentIdNullInput: string;
```

- *Type:* string

---

##### `lifecycleDetailsContainsInput`<sup>Optional</sup> <a name="lifecycleDetailsContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput"></a>

```typescript
public readonly lifecycleDetailsContainsInput: string;
```

- *Type:* string

---

##### `metadataEqualsInput`<sup>Optional</sup> <a name="metadataEqualsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput"></a>

```typescript
public readonly metadataEqualsInput: string[];
```

- *Type:* string[]

---

##### `nameContainsInput`<sup>Optional</sup> <a name="nameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput"></a>

```typescript
public readonly nameContainsInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId"></a>

```typescript
public readonly cloudResourceId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName"></a>

```typescript
public readonly entityTypeName: string[];
```

- *Type:* string[]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `hostnameContains`<sup>Required</sup> <a name="hostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains"></a>

```typescript
public readonly hostnameContains: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isManagementAgentIdNull`<sup>Required</sup> <a name="isManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull"></a>

```typescript
public readonly isManagementAgentIdNull: string;
```

- *Type:* string

---

##### `lifecycleDetailsContains`<sup>Required</sup> <a name="lifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains"></a>

```typescript
public readonly lifecycleDetailsContains: string;
```

- *Type:* string

---

##### `metadataEquals`<sup>Required</sup> <a name="metadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals"></a>

```typescript
public readonly metadataEquals: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameContains`<sup>Required</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesConfig <a name="DataOciLogAnalyticsLogAnalyticsEntitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntitiesConfig: dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId">cloudResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName">entityTypeName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains">hostnameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull">isManagementAgentIdNull</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains">lifecycleDetailsContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals">metadataEquals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains">nameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId">sourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}.

---

##### `cloudResourceId`<sup>Optional</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId"></a>

```typescript
public readonly cloudResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}.

---

##### `entityTypeName`<sup>Optional</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName"></a>

```typescript
public readonly entityTypeName: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciLogAnalyticsLogAnalyticsEntitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#filter DataOciLogAnalyticsLogAnalyticsEntities#filter}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}.

---

##### `hostnameContains`<sup>Optional</sup> <a name="hostnameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains"></a>

```typescript
public readonly hostnameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isManagementAgentIdNull`<sup>Optional</sup> <a name="isManagementAgentIdNull" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull"></a>

```typescript
public readonly isManagementAgentIdNull: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}.

---

##### `lifecycleDetailsContains`<sup>Optional</sup> <a name="lifecycleDetailsContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains"></a>

```typescript
public readonly lifecycleDetailsContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}.

---

##### `metadataEquals`<sup>Optional</sup> <a name="metadataEquals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals"></a>

```typescript
public readonly metadataEquals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `nameContains`<sup>Optional</sup> <a name="nameContains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains"></a>

```typescript
public readonly nameContains: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesFilter <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntitiesFilter: dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection: dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems: dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata: dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata = { ... }
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

const dataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems: dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesFilterList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsLogAnalyticsEntitiesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>[]

---


### DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciLogAnalyticsLogAnalyticsEntitiesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected">areLogsCollected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId">cloudResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName">entityTypeInternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName">entityTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId">managementAgentCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName">managementAgentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties">properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered">timeLastDiscovered</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion">timezoneRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `areLogsCollected`<sup>Required</sup> <a name="areLogsCollected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected"></a>

```typescript
public readonly areLogsCollected: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cloudResourceId`<sup>Required</sup> <a name="cloudResourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId"></a>

```typescript
public readonly cloudResourceId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `entityTypeInternalName`<sup>Required</sup> <a name="entityTypeInternalName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName"></a>

```typescript
public readonly entityTypeInternalName: string;
```

- *Type:* string

---

##### `entityTypeName`<sup>Required</sup> <a name="entityTypeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName"></a>

```typescript
public readonly entityTypeName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `managementAgentCompartmentId`<sup>Required</sup> <a name="managementAgentCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId"></a>

```typescript
public readonly managementAgentCompartmentId: string;
```

- *Type:* string

---

##### `managementAgentDisplayName`<sup>Required</sup> <a name="managementAgentDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName"></a>

```typescript
public readonly managementAgentDisplayName: string;
```

- *Type:* string

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId"></a>

```typescript
public readonly managementAgentId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata"></a>

```typescript
public readonly metadata: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties"></a>

```typescript
public readonly properties: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeLastDiscovered`<sup>Required</sup> <a name="timeLastDiscovered" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered"></a>

```typescript
public readonly timeLastDiscovered: string;
```

- *Type:* string

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `timezoneRegion`<sup>Required</sup> <a name="timezoneRegion" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion"></a>

```typescript
public readonly timezoneRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get"></a>

```typescript
public get(index: number): DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer"></a>

```typescript
import { dataOciLogAnalyticsLogAnalyticsEntities } from 'rhizo-co-terraform-provider-oci'

new dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items"></a>

```typescript
public readonly items: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a>

---



